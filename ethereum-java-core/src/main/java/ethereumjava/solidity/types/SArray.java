package ethereumjava.solidity.types;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by gunicolas on 07/02/17.
 */

public class SArray<T extends SType> extends SType<T[]> {

    private int fixedSize;

    private SArray(T[] value,int _fixedSize) {
        super(value);
        fixedSize = _fixedSize;
    }

    public static <T extends SType> SArray<T> fromArray(T[] array){
        return new SArray<>(array,array.length);
    }

    public static <T extends SType> SArray<T> fromList(List<T> list){

        T[] ret = (T[]) Array.newInstance(T.getClazz(),list.size());
        for(int i =0;i<list.size();i++){
            ret[i] = list.get(i);
        }

        return new SArray<>(ret,-1);
    }

    @Override
    public boolean isDynamicType() {
        return false;
    }

    @Override
    public String asString() {
        return null;
    }

    public static Class<? extends SType> getClazz() {
        return SArray.class;
    }

    public int getFixedSize() {
        return fixedSize;
    }

    public boolean isDynamic(){
        return fixedSize == -1;
    }

    @Target(ElementType.PARAMETER)
    @Retention(RetentionPolicy.RUNTIME)
    public @interface Type {
        /**
         * Get the type definition of the SArray
         * Ex: {@literal SArray<SArray<SBool>> -> bool[X][Y] }
         * @return type definition of the SArray
         */
        String value();
    }
}
